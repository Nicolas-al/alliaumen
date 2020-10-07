<?php

namespace App\Controller;

use App\Entity\Portfolio;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentsController extends AbstractController
{
    /**
     * @Route("/comments/{id}", name="comments")
     * @ParamConverter("portfolio", options={"id" = "id"})
     */
    public function index(Portfolio $portfolio)
    {

        var_dump($portfolio);
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}
