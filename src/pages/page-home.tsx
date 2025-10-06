import Container from '../components/container'
import PhotosList from '../contexts/photos/components/photos-list'

export default function PageHome() {
  return (
    <Container>
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
