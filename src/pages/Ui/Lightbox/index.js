import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { Link, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'reactstrap';

import smimg1 from '~/assets/images/small/img-1.jpg';
import smimg2 from '~/assets/images/small/img-2.jpg';
import smimg3 from '~/assets/images/small/img-3.jpg';
import smimg4 from '~/assets/images/small/img-4.jpg';
import smimg5 from '~/assets/images/small/img-5.jpg';
import smimg6 from '~/assets/images/small/img-6.jpg';
import smimg7 from '~/assets/images/small/img-7.jpg';

const images = [smimg1, smimg2, smimg3, smimg4, smimg5, smimg6, smimg7];

function LightBox() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isFits, setFits] = useState(false);
  const [isEffects, setEffect] = useState(false);
  const [isGallery, setGallery] = useState(false);
  const [isGalleryZoom, setGalleryZoom] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [modal_standard, setModalStandard] = useState(false);

  return (
    <>
      <Container fluid>
        <div className="page-title-box">
          <Row className="align-items-center">
            <Col sm="6">
              <h4 className="page-title">Lightbox</h4>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="#">Veltrix</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="#">UI Elements</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Lightbox</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

        {isFits && (
          <Lightbox
            mainSrc={images[photoIndex]}
            enableZoom={false}
            imageCaption="Caption. Can be aligned it to any side and contain any HTML."
            onCloseRequest={() => setFits(false)}
          />
        )}

        {isEffects && (
          <Lightbox
            mainSrc={images[3]}
            enableZoom={false}
            onCloseRequest={() => setEffect(false)}
          />
        )}

        {isGallery && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            enableZoom={false}
            onCloseRequest={() => setGallery(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + images.length + 1) % images.length)
            }
            imageCaption={`Project ${parseFloat(photoIndex + 1)}`}
          />
        )}

        {isGalleryZoom && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setGalleryZoom(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + images.length + 1) % images.length)
            }
          />
        )}

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Single image lightbox</h4>
                <p className="text-muted m-b-30">
                  Three simple popups with different scaling settings.
                </p>
                <Row>
                  <Col md="6">
                    <h5 className="mt-0 font-14 m-b-15">Fits (Horz/Vert)</h5>
                    <img
                      onClick={() => setFits(true)}
                      className="img-fluid"
                      alt=""
                      src={smimg2}
                      width="145"
                    />
                  </Col>
                  <Col md="6">
                    <h5 className="mt-0 font-14 m-b-15">Effects</h5>
                    <img
                      onClick={() => setFits(true)}
                      className="img-fluid"
                      alt=""
                      src={smimg3}
                      width="75"
                    />
                    <p className="mt-2 mb-0 text-muted">
                      No gaps, zoom animation, close icon in top-right corner.
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Lightbox gallery</h4>
                <p className="text-muted m-b-30">
                  In this example lazy-loading of images is enabled for the next
                  image based on move direction.{' '}
                </p>
                <div className="popup-gallery">
                  <div className="img-responsive float-left">
                    <img
                      src={smimg1}
                      onClick={() => {
                        setGallery(true);
                        setPhotoIndex(0);
                      }}
                      alt=""
                      width="120"
                    />
                  </div>
                  <div className="img-responsive float-left">
                    <img
                      src={smimg2}
                      onClick={() => {
                        setGallery(true);
                        setPhotoIndex(1);
                      }}
                      alt=""
                      width="120"
                    />
                  </div>
                  <div className="img-responsive float-left">
                    <img
                      src={smimg3}
                      onClick={() => {
                        setGallery(true);
                        setPhotoIndex(2);
                      }}
                      alt=""
                      width="120"
                    />
                  </div>
                  <div className="img-responsive float-left">
                    <img
                      src={smimg4}
                      onClick={() => {
                        setGallery(true);
                        setPhotoIndex(3);
                      }}
                      alt=""
                      width="120"
                    />
                  </div>
                  <div className="img-responsive float-left">
                    <img
                      src={smimg5}
                      onClick={() => {
                        setGallery(true);
                        setPhotoIndex(4);
                      }}
                      alt=""
                      width="120"
                    />
                  </div>
                  <div className="img-responsive float-left">
                    <img
                      src={smimg6}
                      onClick={() => {
                        setGallery(true);
                        setPhotoIndex(5);
                      }}
                      alt=""
                      width="120"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Zoom Gallery</h4>
                <p className="text-muted m-b-30">
                  Zoom effect works only with images.
                </p>
                <div className="zoom-gallery">
                  <img
                    src={smimg3}
                    className="float-left"
                    onClick={() => {
                      setGalleryZoom(true);
                      setPhotoIndex(2);
                    }}
                    alt=""
                    width="275"
                  />
                  <img
                    src={smimg7}
                    className="float-left"
                    onClick={() => {
                      setGalleryZoom(true);
                      setPhotoIndex(4);
                    }}
                    alt=""
                    width="275"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="mt-0 header-title">Popup with video or map</h4>
                <p className="text-muted m-b-30">
                  In this example lazy-loading of images is enabled for the next
                  image based on move direction.{' '}
                </p>
                <Row>
                  <Col md="12">
                    <Button
                      color="secondary"
                      className="mo-mb-2"
                      onClick={() => setOpen(true)}
                    >
                      Open YouTube Video
                    </Button>{' '}
                    <Button
                      color="secondary"
                      className="mo-mb-2"
                      onClick={() => setOpen1(true)}
                    >
                      Open Vimeo Video
                    </Button>{' '}
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="0O2aH4XLbto"
                      onClose={() => setOpen(false)}
                    />
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen1}
                      videoId="45830194"
                      onClose={() => setOpen1(false)}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(LightBox);
