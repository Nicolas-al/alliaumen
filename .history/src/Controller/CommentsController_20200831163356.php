<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PortfolioRepository;

class CommentsController extends AbstractController
{
    /**
     * @Route("/comments/{id}", name="comments")
     */
    public function index($id, PortfolioRepository $repoPortfolio)
    {
        $portfolio = $repoPortfolio->find($id);
        var_dump($portfolio);
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}
