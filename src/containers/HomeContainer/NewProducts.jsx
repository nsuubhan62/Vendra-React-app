/* eslint-disable react/prop-types */
import { BsArrowRightShort } from 'react-icons/bs';
import '../../assets/styles/NewProducts.scss';
import NewProductsNestedSection from '../../nestedContainer/HomeNestedContainer/NewProductsNestedSection';
// import { TbGitCompare } from 'react-icons/tb';
// import { AiOutlineEye } from 'react-icons/ai';
const NewProducts = ({ title, NewProductBanner, grid, discount }) => {
    const items = Array.from({ length: 8 }, (_, index) => (
        <main key={index}>
            <NewProductsNestedSection discount={discount} />
        </main>
    ));

    return (
        <>
            <main className=' md:mt-0 mt-6  flex flex-col justify-between '>
                <main>
                    <section className="flex justify-between items-center mb-3">
                        <p className="text-2xl font-extrabold whitespace-nowrap">{title}</p>
                        <p className="text-sm cursor-pointer  text-blue-500 flex gap-1 items-center whitespace-nowrap">View more < BsArrowRightShort size={20} /></p>
                    </section>
                    <hr />
                    <section className={`my-7 grid ${grid} gap-7 `}>
                        {items}
                    </section>
                </main>

                    
                {NewProductBanner &&
                    <section className='relative '>
                        <div className='text-black absolute md:top-6 top-4 md:left-10  z-10  p-2'>
                            <div className='flex'>
                                <p className='md:px-4 px-3 md:py-1 text-sm items-center bg-yellow-500 rounded-full md:block hidden'>Headphones </p>
                            </div>
                            <div className='mt-3 '>
                                <h1 className='md:text-2xl text-lg font-extralight leading-6 md:block hidden'>Immerse Yourself in Pure Sound</h1>
                                <h1 className='md:text-4xl text-2xl font-extrabold leading-6'>Discover Premium Headphones</h1>
                            </div>
                            <button className='px-4 py-1 text-white text-sm font-semibold rounded-full bg-blue-500 mt-2'>
                                <b>Shop now</b>
                            </button>
                        </div>
                        <div className='md:h-full h-[150px]'>
                            <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694938129/banner-4_uoyebo.jpg" className='object-cover w-full h-full' alt="" />
                        </div>
                    </section>
                }


            </main>




        </>
    )
}

export default NewProducts

{/* <div className=' border border-gray rounded-full p-[0.35rem] absolute top-3 left-18 cursor-pointer z-10'>
                            <TbGitCompare size={18} />
                        </div>
                        <div className=' border border-black rounded-full p-1 absolute top-3   left-44  cursor-pointer z-10'>
                            <AiOutlineEye size={20} />
                        </div> */}