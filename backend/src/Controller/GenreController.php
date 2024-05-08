<?php

namespace App\Controller;

use App\Repository\GenreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class GenreController extends AbstractController
{
    public function __construct(
        private GenreRepository $genreRepository,
        private SerializerInterface $serializer
    ) {}

    #[Route('/genre', name: 'app_genre')]
    public function index(): JsonResponse
    {

        $genre = $this->genreRepository->findAll();

        $data = $this->serializer->serialize($genre, "json", ["groups" => "default"]);

        return new JsonResponse($data, json: true);
    }
}
