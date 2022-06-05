import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col } from "reactstrap"
import useSWR from "swr"
import { Profile } from "../types/profile"
import fetcher from "../utils/fetcher"

const Profile = () => {
    const { data, error } = useSWR<Profile>('/api/profile', fetcher)

    if (error) {
        return <div>Failed to load</div>
    }

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <Card>
            <CardHeader>
                My Profile
            </CardHeader>
            <CardBody>
                <CardText>
                    <Row xs={4}>
                        <Col className="bg-light">Id</Col>
                        <Col>{data.id}</Col>
                    </Row>
                    <Row xs={4}>
                        <Col className="bg-light">Nickname</Col>
                        <Col>{data.nickname}</Col>
                    </Row>
                    <Row xs={4}>
                        <Col className="bg-light">Firstname</Col>
                        <Col>{data.firstName}</Col>
                    </Row>
                    <Row xs={4}>
                        <Col className="bg-light">Lastname</Col>
                        <Col>{data.lastName}</Col>
                    </Row>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Profile