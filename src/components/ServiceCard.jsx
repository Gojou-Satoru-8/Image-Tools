import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@nextui-org/react";
const ServiceCard = ({ title, message, onPress }) => {
  return (
    <Card className="basis-[95%] sm:basis-[30%] sm:hover:-translate-y-4">
      <CardHeader className="flex justify-center">
        <h1 className="text-md">{title}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="text-center">
          <p>{message}</p>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center">
        <Button type="button" onPress={onPress}>
          Try it Out
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
