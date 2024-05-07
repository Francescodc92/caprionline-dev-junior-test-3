<?php

namespace App\Controller;

use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MoviesController extends AbstractController
{
    public function __construct(
        private MovieRepository $movieRepository,
        private SerializerInterface $serializer
    ) {}

    #[Route('/movies', methods: ['GET'])]
    public function list(Request $request): JsonResponse
    {
        $dateOrder = $request->query->get('releaseDate');
        $ratingOrder = $request->query->get('rating');

        $queryBuilder = $this->movieRepository->createQueryBuilder('m');

        if ($dateOrder) {
            $queryBuilder->orderBy('m.releaseDate', $dateOrder);
        }else if ($ratingOrder) {
            $queryBuilder->orderBy('m.rating', $ratingOrder);
        }

        $movies = $queryBuilder->getQuery()->getResult();

        $data = $this->serializer->serialize($movies, "json", ["groups" => "default"]);

        return new JsonResponse($data, json: true);
    }

    #[Route('/genre/{id}/movies', methods: ['GET'])]
    public function listGenreMovies(int $id): JsonResponse
    {
        $movies = $this->movieRepository->findMoviesByGenreId($id);
        $data = $this->serializer->serialize($movies, "json", ["groups" => "default"]);

        return new JsonResponse($data, json: true);
    }
}
