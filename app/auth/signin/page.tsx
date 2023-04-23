import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

const SignInPage = async () => {
    const providers = await getProviders()
    return <div className='grid justify-center'>
        <div >
            <Image
                className='rounded-fill mx-2 object-cover'
                width={500}
                height={500}
                src='https://links.papareact.com/161'
                alt='meta logo'
            />
        </div>
        <SignInComponent providers={providers} />
    </div>
}

export default SignInPage