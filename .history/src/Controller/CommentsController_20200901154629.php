<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Portfolio;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentsController extends AbstractController
{
    /**
     * @Route("/show_project/{id}", name="portfolio")
     */
    public function index(Portfolio $portfolio)
    {
        if (isset($_POST['author'])){
        var_dump($_POST['author']);
        }
        else{
            var_dump('erreur');
        }
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}
