import Container from '../components/container'
import AlbumsFilter from '../contexts/albums/components/albums-filter'
import useAlbums from '../contexts/albums/hooks/useAlbums'
import PhotosList from '../contexts/photos/components/photos-list'

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums()

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: '123',
            title: 'Olá Mundo',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '3421', title: 'Album 1' },
              { id: '1234', title: 'Album 2' },
              { id: '5678', title: 'Album 3' },
            ],
          },
          {
            id: '456',
            title: 'Olá Mundo',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '3421', title: 'Album 1' },
              { id: '1234', title: 'Album 2' },
              { id: '5678', title: 'Album 3' },
            ],
          },
        ]}
      />
    </Container>
  )
}
