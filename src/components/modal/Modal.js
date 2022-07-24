import {FaTimes} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'

const Modal = ({value, handleSubmit, changeCity }) => {
  return (
    <div className="modal" id='modal__animation'>
        <div className="modal__content">

            <form onSubmit={handleSubmit}>
                <div className='modal__alignment'>
                    <div className="modal__header ">
                        <h3 className="modal__title ">
                            Enter A New Location
                        </h3>
                        <a href="#">
                            <div className="modal__exit-icon" >
                                <FaTimes className='exit-icon'/>
                            </div>
                        </a>
                    </div>
                    <div className="modal__body">  
                            <div className="form__group field modal__city">
                                <input type="input" className="form__field" placeholder="City" name="city" id='city' 
                                value={value} 
                                onChange= { e => changeCity(e.target.value)}
                                required />
                                <label htmlFor="city" className="form__label">City</label>
                            </div>

                            <div className="form__group field modal__country">
                                <input type="input" className="form__field" placeholder="Country" name="country" id='country'
                                value={value} 
                                required />
                                <label htmlFor="name" className="form__label">Country</label>
                            </div>
                    </div>
                </div>
                <div className="modal__footer">
                        
                        <a href="#" className="modal__btn modal__btn--clear" ><BsTrash className='btn--clear__icon'/>Clear</a>

                        <div>
                            <a href="#" className="modal__btn modal__btn--cancel" >Cancel</a>

                            <input className="modal__btn modal__btn--submit" type="submit" value='Submit'/>

                            {/* <input className="modal__btn modal__btn2" type="submit" value="Submit"/> */}
                             {/*  <a href="#" className="modal__btn modal__btn2" >Submit</a>  */}
                        </div>  
                </div>
            </form>

        </div>
    </div>
  )
}

export default Modal