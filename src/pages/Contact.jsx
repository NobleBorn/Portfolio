import { useState, useRef, Suspense, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Developer from '../models/Developer'
import { OrbitControls } from '@react-three/drei'
import Alert from '../components/Alert'
import { socialLinks } from '../constants'

const Contact = () => {

  const formRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [animationName, setAnimationName] = useState('idle')

  const [alert, showAlert, hideAlert] = useAlert()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setAnimationName('salute')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Mojtaba Alizade",
        from_email: form.email,
        to_email: "00mojali.afg@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' })

      setTimeout(() => {
        hideAlert()
        setAnimationName('idle')
        setForm({ name: '', email: '', message: '' });
      }, [3000])
      
    }).catch((error) => {
      setIsLoading(false)
      setAnimationName('idle')
      console.log(error)
      showAlert({ show: true, text: 'Failed to send message!', type: 'danger' })
    })
  };

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  return (
    <section className='w-full h-full lg:h-[100vh]' style={{backgroundColor: '#222222' }}>
      <section className='relative flex lg:flex-row flex-col max-container'>
        {alert.show && (<Alert {...alert} />)}

        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='head-text text-white'>Reach Out</h1>

          <div className='social-links flex flex-row mt-4 space-x-4'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className='flex items-center text-white my-2 space-x-2'
                target='_blank' // Ensure the link opens in a new tab
                rel='noopener noreferrer' // Security best practice
              >
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className='h-6 w-6' // You can adjust the size of the icons
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
            <label className='text-black-500 font-semibold' 
              onPointerOver={() => setAnimationName('salute')}
              onPointerOut={() => setAnimationName('idle')}
            >
              Name 
              <input type='text' name='name' className='input' placeholder='John' 
                required value={form.name} onChange={handleChange} style={{fontSize: '16px'}}/>

            </label>
            <label className='text-black-500 font-semibold'
              onPointerOver={() => setAnimationName('clapping')}
              onPointerOut={() => setAnimationName('idle')}
            >
              Email 
              <input type='email' name='email' className='input' placeholder='john@gmail.com'
                required value={form.email} onChange={handleChange} style={{fontSize: '16px'}}/>

            </label>
            <label className='text-black-500 font-semibold'
              onPointerOver={() => setAnimationName('victory')}
              onPointerOut={() => setAnimationName('idle')}
            >
              Your Message 
              <textarea name='message' rows={4} className='textarea' placeholder='Let me know how I can help you!' 
                required value={form.message} onChange={handleChange} style={{fontSize: '16px'}}/>
            </label>
            <button type='submit' className='btn' disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
            <directionalLight position={[3, 3, 3]} intensity={4}/>
            <ambientLight intensity={1.5}/>
            <spotLight position={[3, 3, 3]} angle={0.15} penumbra={1}/>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={<Loader page='contact'/>}>
                <Developer animationName={animationName} scale={2.5} position={[0.2, -2.5, -0.5]} rotation={[0.6, 0, 0]}/>
            </Suspense>
          </Canvas>

        </div>
      </section>
    </section>
  )
}

export default Contact