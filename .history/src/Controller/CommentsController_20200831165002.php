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
    public function index(PortfolioRepository $repoPortfolio, $id)
    {

        $portfolio = $repoPortfolio->find($id);
        var_dump($id);
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}
