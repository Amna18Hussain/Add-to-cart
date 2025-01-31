import React from 'react'
import ItemCartS from './ItemCartS'; // Update the import statement
import data from './data';

const Home = () => {
  console.warn(data.productData);
  return (
    <>
      <h1 className='text-center mt-3'>All items</h1>
      <section className='py-4 container'>
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <ItemCartS img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index} />
            )
          })}
        </div>


      </section>

    </>
  )
}
export default Home;
