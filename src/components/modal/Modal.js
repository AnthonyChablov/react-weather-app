import {FaTimes} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'

const Modal = ({onSubmit, onChangeCity ,onChangeCountry, formInputCity, formInputCountry, setFormInputCity, setFormInputCountry, clearForm}) => {
  return (
    <div className="modal" id='modal__animation'>
        <div className="modal__content">
            <form onSubmit={onSubmit}>
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
                                <input 
                                type="input" 
                                className="form__field" 
                                placeholder="City" 
                                name="city" 
                                id='city' 
                                value={formInputCity}
                                onChange = {onChangeCity}
                                required />
                                <label 
                                    htmlFor="city" 
                                    className="form__label" 
                                    onChange={(e) => setFormInputCity(e.target.value)}
                                    >City
                                </label>
                            </div>

                            <div className="form__group field modal__country">
                                <input 
                                type="input" className="form__field" placeholder="Country" name="country" 
                                id='country'
                                value={formInputCountry}
                                onChange = {onChangeCountry}
                                required />
                                <label 
                                    htmlFor="name" 
                                    className="form__label" 
                                    onChange={(e) => setFormInputCountry(e.target.value)}
                                    >Country
                                </label>
                            </div>
                    </div>
                </div>
                <div className="modal__footer">
                        
                        <a 
                            href="#modal__animation"     className="modal__btn modal__btn--clear" 
                            onClick={()=>clearForm()}>
                                <BsTrash className='btn--clear__icon'/>Clear
                        </a>

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