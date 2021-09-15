import * as React from 'react';
import {connect} from 'react-redux';
import StyledUserProfile from './StyledUserProfile';
import {IAppContext} from '../../utilities/TranslationsProvider';
import {readRecord, storeToLocalStorageDebounced} from '../../utilities/localStorageService';
import {Dispatch} from 'redux';
import {changeUsername} from '../../store/message/actions';

interface IUserProfileState{
    username: string;
}