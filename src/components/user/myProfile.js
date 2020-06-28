import React, { Fragment } from 'react';
import profilePic from '../../assets/my-profile.png';
import { Link } from 'react-router-dom';

import '../../css/styles/myProfile.scss';
import { FormattedMessage } from 'react-intl';

const Profile = () => {
    const renderProfileForm = () => {
        return (
            <section className='catalogSectionLayout'>
                <fieldset className='fieldsetStyle profile__componentAligment'>
                    <legend className='profile__textAligment'>
                        <h3>
                            <FormattedMessage id='profile'/>
                        </h3>
                        <img className='profile__image' alt='profile' src={profilePic}/>
                    </legend>
                    <form>
                        <p>
                            <FormattedMessage id='name-lastname'/>*
                        </p>
                        <label htmlFor='name'>
                            <input className='inputStyle' name='name' type='text' required/>
                        </label>
                        <p>
                            <FormattedMessage id='phone'/>*
                        </p>
                        <label htmlFor='phone'>
                            <input className='inputStyle' name='phone' type='numeric' required/>
                        </label>
                        <p>
                            <FormattedMessage id='adress'/>*
                        </p>
                        <label htmlFor='adress'>
                            <input className='inputStyle' name='adress' type='text' required/>
                        </label>
                    </form>
                </fieldset>
                <div className='infoLayout fieldsetStyle profile__componentAligment'>
                    <button className='whiteButton'>
                        <Link to='/'>
                            <FormattedMessage id='cancel'/>
                        </Link>
                    </button>
                    <button className='redButton'>
                        <FormattedMessage id='save'/>
                    </button>
                </div>
            </section>
        )
    }
    return (
        <Fragment>{renderProfileForm()}</Fragment>
    );
};

export default Profile;