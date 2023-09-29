// Styles
import './style.css';

// Data
import quicklinksData from '../../../../data/quicklinks.json';
import { markdownToHTML } from '../../../../utils/converter';

// -------------

function QuickLinks() {

  return (
    <section id="quicklinks" className="section">
      <div className="content-670">
        <h2 className="title">{quicklinksData.title}</h2>
        <div className="section-des">{quicklinksData.description}</div>
        {quicklinksData.paragraphtop.map((text: string, i: number) => (
          <p
            key={'p-' + i}
            dangerouslySetInnerHTML={{ __html: markdownToHTML(text) }}></p>
        ))}
      </div>

      <ul className="serv-link-cover block-right" data-jarallax-element="0 40">
        {quicklinksData.quicklinksRedirects.map((link, i: number) => (
          <li key={'serv-link' + i}>
            <a href={link.to}>{link.text}</a>
          </li>
        ))}
      </ul>

      <div className="content-671">

        {quicklinksData.paragraphbottom.map((text: string, i: number) => (
          <p
            key={'p-' + i}
            dangerouslySetInnerHTML={{ __html: markdownToHTML(text) }}></p>
        ))}
      </div>

    </section>
  );
}

export default QuickLinks;
