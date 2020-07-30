<?php

namespace app\Listener;

use Doctrine\Common\EventSubscriber;

class ImageCacheSubscriber implements EventSubscriber
{
    public function getSubscribedEvents()
    {
        return [
            'preRemove',
            'preUpdate'
        ];
    }
}