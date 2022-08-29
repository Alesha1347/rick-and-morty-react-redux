export function Footer(){

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    }

    return (
        <div className="footer">
            <div className="footer__content">
        <div className="footer__img-container">
          <img className="footer__img"
          onClick={scrollToTop}
          />
        </div>
        <div className="footer__info">
          <div className="footer__info-doc">
            <a className="footer__link" target="_balnk" href="https://rickandmortyapi.com/">
            Документация
            </a>
          </div>
          <div className="footer__info-git">
            <a className="footer__link"  target='_blank' href="https://github.com/Alesha1347/rick-and-morty-react-hooks">
              GitHub
            </a>
          </div>
        </div>
      </div>
        </div>
    )
}