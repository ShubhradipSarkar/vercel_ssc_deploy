import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  
    
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        "service_beieeeg",
        
        "template_7133z8o",
        templateParams,
        "8kEcGq1L6psn02-0m"
      );
      console.log('POSTED');
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  
  

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row d-flex flex-column flex-lg-row align-items-center'>
          <div className="col-6 d-flex justify-center flex-column align-items-center ">
             <h2 style={{color:"white"}}>Address</h2>
             <p style={{color:"white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio reiciendis rerum, fuga quod, dicta ab sequi, voluptatibus nesciunt magni maiores quisquam fugiat at voluptas illo aut laborum eius! Culpa?</p>
          </div>
          <div className='col-6 text-center'>
          <h2 style={{color:"white"}}>Message Us</h2>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow mb-3'>
                  <div className='col-12'>
                    <input
                      type='text'
                      name='name'
                      required
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  
                </div>
                <div className='row formRow mb-3'>

                <div className='col-12'>
                    <input
                      type='email'
                      name='email'
                      required
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                      ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                  </div>

                  </div>
                {/* Row 2 of form */}
                <div className='row formRow mb-3'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      required
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow mb-3'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      required
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn btn btn-primary mb-5 w-100' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;