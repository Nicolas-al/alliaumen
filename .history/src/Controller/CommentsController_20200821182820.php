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
    public function index(PortfolioRepository $repoPortfolio)
    {

        $portfolio = $repoPortfolio->findAll();

        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}
