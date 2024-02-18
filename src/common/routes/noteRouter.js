import React from 'react';
import { NoteProvider } from '../contexts/NoteContext';
import Note from '../../pages/Note';

const NOTE = (import('../../pages/Note'));

export default (
    <NoteProvider><Note /></NoteProvider>
);