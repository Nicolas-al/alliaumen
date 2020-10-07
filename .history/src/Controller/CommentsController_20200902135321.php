<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Portfolio;
use App\Repository\CommentsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentsController extends AbstractController
{
    /**
     * @Route("/show_project/{id}", name="portfolio")
     */
    public function index(Portfolio $portfolio, CommentsRepository $repoComments, Request $request, EntityManagerInterface $manager)
    {
        if ($request->request->count() > 0){
            $comment= new Comments();
            
            $comment->setPortfolioId($portfolio);
            $comment->setAuthor($request->request->get('author'));
            $comment->setContent($request->request->get('comment'));
            $comment->setCreatedAt(new \DateTime());

            $manager->persist($comment);
            $manager->flush();
        }
        else{
            var_dump('erreur');
        }

        $comments = $repoComments->findBy('portfolio_id');
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $repoComments
        ]);
    }
}
