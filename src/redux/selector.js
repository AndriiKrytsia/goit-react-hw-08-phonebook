import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectUser = state => state.user.user;
export const selectLogged = state => state.user.isLogged;
export const selectToken = state => state.user.token;
export const selectIsRefreshing = state => state.user.isRefresh;
export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
