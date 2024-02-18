import React from 'react';
import i18n from '../common/i18n/i18n';
import PropTypes from 'prop-types';

// providers
// import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { NoteProvider } from '../common/contexts/NoteContext';
// router
import Router from '../common/routes';
import Note from '../pages/Note';

function WrapPage({ navigation }) {
    
    return (
        //<I18nextProvider i18n={i18n}>
        // <Router />
        //</I18nextProvider>
        //<I18nextProvider i18n={i18n}>
            <NoteProvider>
                <Note navigation={navigation} />
            </NoteProvider>
        //</I18nextProvider>
    );
}

WrapPage.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default WrapPage;