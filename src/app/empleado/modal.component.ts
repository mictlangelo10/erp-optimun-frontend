import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mi-modal',
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Enviar Solicitud</h5>
      <button type="button" class="btn-close" (click)="cerrarModal()" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>¿Está seguro de que desea enviar esta solicitud?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="cerrarModal()">Cancelar</button>
      <button type="button" class="btn btn-primary">Enviar</button>
    </div>
  `,
})
export class ModalComponent {
    constructor(private modalService: NgbModal) {}
    cerrarModal() {
        this.modalService.dismissAll();
      }
}