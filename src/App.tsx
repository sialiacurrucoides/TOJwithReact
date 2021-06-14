import { IntlProvider } from 'react-intl';
import { useAppSelector } from './hooks/storeManipulation';
import './App.scss';
import translations from './locales/locales';
import TOJgame from './components/Game/TOJgame';


function App() {

  const currentLanguage = useAppSelector(state => state.general.selectedLanguage);

  return (
    <IntlProvider 
    messages={translations[currentLanguage]}
    locale={currentLanguage}
    defaultLocale="en"
    >
      <div className="App">
        <TOJgame></TOJgame>
      </div>
    </IntlProvider>
  );
}

export default App;
