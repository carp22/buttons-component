import React from 'react'
import Default from './Default'

function Buttons() {

  return (
    <div>
        <section className='basic-buttons-section'>
            <div className='group'>  
                <h3>{"<Button />"}</h3>
                <button variant="outline"> Default </button>
            </div>
            <Default />
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button variant=”outline” />"}</h3>
                <button> Default </button>
            </div>

            <Default />
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button variant=”text” />"}</h3>
                <button> Default </button>
            </div>

            <Default />
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button disableShadow />"}</h3>
                <button disabledShadow> Default </button>
            </div>
            <Default />
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button disabled />"}</h3>
                <button disabled > Default </button>
            </div>
            <div className='group'>
                <h3>{"<Button variant=”text” disabled />"}</h3>
                <button> Default </button>
            </div>
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button disableShadow />"}</h3>
                <button> Default </button>
            </div>
            <Default />
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button startIcon=”local_grocery_store” />"}</h3>
                <button> Default </button>
            </div>
            <div className='group'>
                <h3>{"<Button endIcon=”local_grocery_store” />"}</h3>
                <button> Default </button>
            </div>
        </section>

        <section className='basic-buttons-section'>
            <div className='group'>
                <h3>{"<Button disableShadow />"}</h3>
                <button> Default </button>
            </div>
            <Default />
        </section>
    </div>
  )
}

export default Buttons