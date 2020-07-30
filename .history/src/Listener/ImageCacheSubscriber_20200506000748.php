<?php

namespace App\Listener;

use App\Entity\Skills;
use App\Entity\Portfolio;
use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreFlushEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ImageCacheSubscriber implements EventSubscriber
{
    /**
     * @var cacheManager
     */
    private $cacheManager;

    /**
     * @var UploaderHelper
     */
    private $uploaderHelper;

    public function __construct(CacheManager $cacheManager, UploaderHelper $uploaderHelper)
    {
        $this->cacheManager = $cacheManager;
        $this->uploaderHelper = $uploaderHelper;
    }
    
    public function getSubscribedEvents()
    {
        return [
            'preRemove',
            'preUpdate'
        ];
    }
    public function preRemove(LifecycleEventArgs $args)
    {
        $entity =  $args->getEntity();
        if (!$entity instanceof Skills || !$entity instanceof Portfolio){
            return;
        }
        // if ($entity instanceof Portfolio)
        // {
        //     $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'imageFile'));   
        // }
        if ($entity instanceof Skills)
        {
            $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'logoFile'));   
        }
    }

    public function preUpdate(PreUpdateEventArgs $args)
    {
        $entity =  $args->getEntity();
        if (!$entity instanceof Skills || !$entity instanceof Portfolio){
            return;
        }
        if ($entity instanceof Portfolio)
        {
            if ($entity->getImageFile() instanceof Uploadedfile)
            {
                $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'imageFile'));
            }
        }
        if ($entity instanceof Skills)
        {
            if ($entity->getImageFile() instanceof UploadedFile)
            {
                $this->cacheManager->remove($this->uploaderHelper->asset($entity, 'logoFile'));
            }
        }
        
    }
}