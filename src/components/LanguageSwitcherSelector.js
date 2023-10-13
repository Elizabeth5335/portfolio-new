const languages = [
    { code: 'en', name: 'English'},
    { code: 'ua', name: 'Українська'},
    { code: 'pl', name: 'Polska'}

  ]

export default function LanguageSwitcherSelector (props){
    function onChange(e){
      return props.handleChangeLanguage(e.target.className);
    }
    
      const options = languages.map(language => {
        if(language.code != props.lang){
          return <li key={language.code} onClick={onChange}><div value={language.code} className={language.code} ></div></li>
        }  
      });
      
      return (
        <div className="lang"> 
          <div 
            className={props.lang}
          >
          </div>
          <ul className="dropdown" >
            {options}
          </ul>
        </div>
      )
  }