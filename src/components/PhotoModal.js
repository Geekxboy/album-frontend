import React, { Component } from 'react';
import { Modal, Image } from 'react-bootstrap';

export default class PhotoModal extends Component {
    render() {
        return (
          <Modal {...this.props}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>{this.props.photo.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Image src={this.props.photo.url} rounded fluid />
                </Modal.Body>
            </Modal.Dialog>
          </Modal>
        );
    }
}