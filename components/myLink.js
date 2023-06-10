import Link from "next/link";

const MyLink = ({ href, text }) => {
  return (
    <Link href={href} className='block w-11/12 my-4 mx-auto p-2 rounded-md bg-white text-center border'>{text}</Link>
  );
}

export default MyLink;