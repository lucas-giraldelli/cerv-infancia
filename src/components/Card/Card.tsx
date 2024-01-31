import './Card.styles.scss';

type CardProps = {
  title: string;
  amount: number;
};

function Card(props: CardProps) {
  const { title, amount } = props;

  return (
    <article className="card">
      <p className="card__title">{title}</p>
      <p className="card__amount">{amount}</p>
    </article>
  );
}

export default Card;
