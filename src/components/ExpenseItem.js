import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {
  return (
    <div>
      <ExpenseDate date={props.date} />
      {/* <div>{props.date}</div> */}
      <div className=''>
        <h2>{props.title}</h2>
        <div className=''>${props.amount}</div>
      </div>
    </div>
  );
}
