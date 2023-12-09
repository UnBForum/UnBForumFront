import { useNavigate } from 'react-router-dom'
import { CreateModalTopic } from '../../components/CreateTopicModal'

export function CreateTopic() {
  const navigate = useNavigate()
  return (
    <>
      <CreateModalTopic
        isModalOpen={true}
        setIsModalOpen={() => navigate('/')}
      />
    </>
  )
}
