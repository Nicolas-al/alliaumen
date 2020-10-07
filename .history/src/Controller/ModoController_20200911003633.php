<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Portfolio;
use App\Repository\CommentsRepository;
use App\Repository\PortfolioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ModoController extends AbstractController
{

    /**
     * @Route("/modo", name="home_modo")
     */
    public function index(PortfolioRepository $repoPortfolio){
        $portfolio = $repoPortfolio->findAll();

        return $this->render('modo/index.html.twig' ,[ 
            'portfolio' => $portfolio
            ]);
    }

    /**
     * @Route("/modo/{id}", name="modo_project")
     */
    public function showProject(Portfolio $portfolio, CommentsRepository $repoComments)
    {     
        $comments = $repoComments->findAll();

        //  if (isset($_GET["action"]) && $_GET["action"] == "deleteCom"){
        //         if (isset($_GET['commentId'])){

                    // $id = $_GET['commentId'];
                    // $comment = $this->getDoctrine()->getRepository(Comments::class)->find($id);
                    // var_dump($comment);

                    // $entityManager = $this->getDoctrine()->getManager();
                    // $entityManager->remove($comment);
                    // $entityManager->flush();
                // }
        // }
        
        $this->banIp();

        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments
        ]);
    }

    /**
    * @Route("/modo/delete-com/{id}", name="delete_com")
    */

    public function deleteComments(Comments $comments, $id){

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($comments);
        $entityManager->flush();
    }

    Public function banIp()
    {
        if (isset($_GET["action"]) && $_GET["action"] == "ban")
        {
            $ip = array($_SERVER['REMOTE_ADDR']);

            $json = json_encode($ip);
            $bytes = file_put_contents("/Users/nicolasalliaume/Documents/Code/Local-sites/ProjetsOpenclassroom/Projet5/ip.json", $json);

            // var_dump(
            //     $ip,
            //     json_encode($ip, JSON_NUMERIC_CHECK)
            //    );

            $ip = json_decode(file_get_contents('/Users/nicolasalliaume/Documents/Code/Local-sites/ProjetsOpenclassroom/Projet5/ip.json'), true);
            var_dump($ip);   
        }
    }
}
