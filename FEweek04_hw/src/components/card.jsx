const Card = ({ name, category, desc, image, isRecommended }) => {
  return (
    <CardBox>
      {isRecommended ? <Badge>Best</Badge> : null}
      <Label category={category} />
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </CardBox>
  );
};
export default Card;