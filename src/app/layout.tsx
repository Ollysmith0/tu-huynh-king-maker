import './globals.css';
import StyledComponentsRegistry from 'lib/registry';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
