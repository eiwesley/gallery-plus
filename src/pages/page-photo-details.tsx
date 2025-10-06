import { useParams } from 'react-router'
import Button from '../components/button'
import Container from '../components/container'
import ImagePreview from '../components/image-preview'
import Skeleton from '../components/skeleton'
import Text from '../components/text'
import PhotosNavigator from '../contexts/photos/components/photos-navigator'
import type { Photo } from '../contexts/photos/models/photo'

export default function PagePhotoDetails() {
  const { id } = useParams()
  // Apenas para fazer o test do mock
  const isLoadingPhoto = true
  const photo = {
    id: '123',
    title: 'Olá Mundo',
    imageId: 'portrait-tower.png',
    albums: [
      { id: '3421', title: 'Album 1' },
      { id: '1234', title: 'Album 2' },
      { id: '5678', title: 'Album 3' },
    ],
  } as Photo

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>
      </div>
    </Container>
  )
}
