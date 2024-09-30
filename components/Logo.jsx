import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/' className='flex'>
      <Image src="/programmer.gif" alt="logo" width={44} height={44} priority className='rounded-xl' />
        
        <h1 className='font-semibold mt-1 ml-1'>R.B.C.M</h1>
    </Link>
  )
}

export default Logo