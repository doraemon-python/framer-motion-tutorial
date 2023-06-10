const MyButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className='block w-11/12 my-4 mx-auto p-2 rounded-md bg-white text-center border'>{text}</button>
  );
}

export default MyButton;