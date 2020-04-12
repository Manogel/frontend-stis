import React from 'react';
import { Switch } from 'react-router-dom';

import Calendar from '~/pages/Calendar';
import ChartsApex from '~/pages/Charts/Apex';
import ChartsChartist from '~/pages/Charts/Chartist';
import ChartsChartjs from '~/pages/Charts/Chartjs';
import ChartsEchart from '~/pages/Charts/Echart';
import ChartsKnob from '~/pages/Charts/Knob';
import ChartsSparkline from '~/pages/Charts/Sparkline';
import Dashboard from '~/pages/Dashboard';
import DetailTopic from '~/pages/DetailTopic';
import EmailCompose from '~/pages/Email/Compose';
import EmailInbox from '~/pages/Email/Inbox';
import EmailRead from '~/pages/Email/Read';
import Comingsoon from '~/pages/ExtraPages/Comingsoon';
import Directory from '~/pages/ExtraPages/Directory';
import PageError404 from '~/pages/ExtraPages/Erros/404';
import PageError500 from '~/pages/ExtraPages/Erros/500';
import Faq from '~/pages/ExtraPages/Faq';
import ForgotPw from '~/pages/ExtraPages/ForgotPassword';
import Gallery from '~/pages/ExtraPages/Gallery';
import Invoice from '~/pages/ExtraPages/Invoice';
import ExtraLogin from '~/pages/ExtraPages/Login';
import Maintenance from '~/pages/ExtraPages/Maintenance';
import Pricing from '~/pages/ExtraPages/Pricing';
import ExtraRegister from '~/pages/ExtraPages/Register';
import Timeline from '~/pages/ExtraPages/Timeline';
import ForgotPassword from '~/pages/ForgotPassword';
import FormAdvanced from '~/pages/Forms/Advanced';
import FormEditors from '~/pages/Forms/Editors';
import FormElements from '~/pages/Forms/Elements';
import FormMask from '~/pages/Forms/Mask';
import FormRepeater from '~/pages/Forms/Repeater';
import FormUploads from '~/pages/Forms/Uploads';
import FormValidation from '~/pages/Forms/Validation';
import FormWizard from '~/pages/Forms/Wizard';
import IconsDrip from '~/pages/Icons/Drip';
import IconsFontAwesome from '~/pages/Icons/FontAwesome';
import IconsIon from '~/pages/Icons/Ion';
import IconsMaterial from '~/pages/Icons/Material';
import IconsThemify from '~/pages/Icons/Themify';
import IconsTyp from '~/pages/Icons/Typ';
import Login from '~/pages/Login';
import MapsGoogle from '~/pages/Maps/Google';
import MapsVector from '~/pages/Maps/Vector';
import References from '~/pages/References';
import Register from '~/pages/Register';
import ResetPassword from '~/pages/ResetPassword';
import TablesBasic from '~/pages/Tables/Basic';
import TablesDatatables from '~/pages/Tables/Datatable';
import TablesEditable from '~/pages/Tables/Editable';
import TablesResponsive from '~/pages/Tables/Responsive';
import Topics from '~/pages/Topics';
import UiAlerts from '~/pages/Ui/Alerts';
import UiButtons from '~/pages/Ui/Buttons';
import UiCards from '~/pages/Ui/Cards';
import UiCarousel from '~/pages/Ui/Carousel';
import UiColors from '~/pages/Ui/Colors';
import UiDropdowns from '~/pages/Ui/Dropdowns';
import UiGeneral from '~/pages/Ui/General';
import UiGrid from '~/pages/Ui/Grid';
import UiImages from '~/pages/Ui/Images';
import UiLightbox from '~/pages/Ui/Lightbox';
import UiModals from '~/pages/Ui/Modals';
import UiProgressbars from '~/pages/Ui/Progressbars';
import UiRangeslider from '~/pages/Ui/Rangeslider';
import UiRating from '~/pages/Ui/Rating';
import UiSessionTimeout from '~/pages/Ui/SessionTimeout';
import UiSweetAlert from '~/pages/Ui/SweetAlert';
import UiTabsAccordions from '~/pages/Ui/TabsAccordions';
import UiTypography from '~/pages/Ui/Typography';
import UiVideo from '~/pages/Ui/Video';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forget-password" exact component={ForgotPassword} />
      <Route path="/reset-password" exact component={ResetPassword} />

      <Route path="/pages-404" exact component={PageError404} />
      <Route path="/pages-500" exact component={PageError500} />

      <Route path="/pages-maintenance" exact component={Maintenance} />
      <Route path="/pages-comingsoon" exact component={Comingsoon} />

      <Route path="/pages-login" exact component={ExtraLogin} />
      <Route path="/pages-register" exact component={ExtraRegister} />
      <Route path="/pages-forgot" exact component={ForgotPw} />
      <Route path="/pages-faq" exact component={Faq} isPrivate />

      <Route path="/pages-timeline" exact component={Timeline} isPrivate />
      <Route path="/pages-directory" exact component={Directory} isPrivate />
      <Route path="/pages-invoice" exact component={Invoice} isPrivate />
      <Route path="/pages-pricing" exact component={Pricing} isPrivate />
      <Route path="/pages-gallery" exact component={Gallery} isPrivate />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/references" exact component={References} isPrivate />
      <Route path="/topics" exact component={Topics} isPrivate />
      <Route path="/topics/new-topic" exact component={DetailTopic} isPrivate />
      <Route
        path="/topics/edit-topic/:id"
        exact
        component={DetailTopic}
        isPrivate
      />

      <Route path="/calendar" exact component={Calendar} isPrivate />

      <Route path="/email-inbox" exact component={EmailInbox} isPrivate />
      <Route path="/email-read" exact component={EmailRead} isPrivate />
      <Route path="/email-compose" exact component={EmailCompose} isPrivate />

      <Route path="/maps-google" exact component={MapsGoogle} isPrivate />
      <Route path="/maps-vector" exact component={MapsVector} isPrivate />

      <Route path="/charts-chartjs" exact component={ChartsChartjs} isPrivate />
      <Route path="/charts-apex" exact component={ChartsApex} isPrivate />
      <Route path="/charts-echart" exact component={ChartsEchart} isPrivate />
      <Route path="/charts-knob" exact component={ChartsKnob} isPrivate />
      <Route
        path="/charts-sparkline"
        exact
        component={ChartsSparkline}
        isPrivate
      />
      <Route
        path="/charts-chartist"
        exact
        component={ChartsChartist}
        isPrivate
      />

      <Route path="/form-advanced" exact component={FormAdvanced} isPrivate />
      <Route path="/form-editors" exact component={FormEditors} isPrivate />
      <Route path="/form-elements" exact component={FormElements} isPrivate />
      <Route path="/form-mask" exact component={FormMask} isPrivate />
      <Route path="/form-repeater" exact component={FormRepeater} isPrivate />
      <Route path="/form-uploads" exact component={FormUploads} isPrivate />
      <Route path="/form-wizard" exact component={FormWizard} isPrivate />

      <Route path="/tables-basic" exact component={TablesBasic} isPrivate />
      <Route
        path="/tables-editable"
        exact
        component={TablesEditable}
        isPrivate
      />
      <Route
        path="/tables-datatable"
        exact
        component={TablesDatatables}
        isPrivate
      />
      <Route
        path="/tables-responsive"
        exact
        component={TablesResponsive}
        isPrivate
      />

      <Route
        path="/form-validation"
        exact
        component={FormValidation}
        isPrivate
      />

      <Route path="/icons-material" exact component={IconsMaterial} isPrivate />
      <Route
        path="/icons-fontawesome"
        exact
        component={IconsFontAwesome}
        isPrivate
      />
      <Route path="/icons-ion" exact component={IconsIon} isPrivate />
      <Route path="/icons-themify" exact component={IconsThemify} isPrivate />
      <Route path="/icons-typicons" exact component={IconsTyp} isPrivate />
      <Route path="/icons-dripicons" exact component={IconsDrip} isPrivate />

      <Route path="/ui-alerts" exact component={UiAlerts} isPrivate />
      <Route path="/ui-buttons" exact component={UiButtons} isPrivate />
      <Route path="/ui-cards" exact component={UiCards} isPrivate />
      <Route path="/ui-carousel" exact component={UiCarousel} isPrivate />
      <Route path="/ui-colors" exact component={UiColors} isPrivate />
      <Route path="/ui-dropdowns" exact component={UiDropdowns} isPrivate />
      <Route path="/ui-general" exact component={UiGeneral} isPrivate />
      <Route path="/ui-grid" exact component={UiGrid} isPrivate />
      <Route path="/ui-images" exact component={UiImages} isPrivate />
      <Route path="/ui-lightbox" exact component={UiLightbox} isPrivate />
      <Route path="/ui-modals" exact component={UiModals} isPrivate />
      <Route path="/ui-rangeslider" exact component={UiRangeslider} isPrivate />
      <Route path="/ui-rating" exact component={UiRating} isPrivate />
      <Route path="/ui-sweet-alert" exact component={UiSweetAlert} isPrivate />
      <Route path="/ui-typography" exact component={UiTypography} isPrivate />
      <Route path="/ui-video" exact component={UiVideo} isPrivate />
      <Route
        path="/ui-tabs-accordions"
        exact
        component={UiTabsAccordions}
        isPrivate
      />

      <Route
        path="/ui-session-timeout"
        exact
        component={UiSessionTimeout}
        isPrivate
      />

      <Route
        path="/ui-progressbars"
        exact
        component={UiProgressbars}
        isPrivate
      />
      <Route path="*" exact component={PageError500} />
    </Switch>
  );
}
