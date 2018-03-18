import IntroMessages from './introMessages';
import Patatap from './patatap';
import '../css/circles.css';


const patatap = Patatap(),
      introMessages = IntroMessages(patatap);

introMessages.init();
patatap.init();
