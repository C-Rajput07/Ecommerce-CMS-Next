"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import store from "./store";
import { Provider } from 'react-redux';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
