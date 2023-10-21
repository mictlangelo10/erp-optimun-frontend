import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-proyectos-jefe',
  templateUrl: './proyectos-jefe.component.html',
  styleUrls: ['./proyectos-jefe.component.css']
})
export class ProyectosJefeComponent {
// Modal reference
private modalRef?: NgbModalRef;

 constructor(public modalService: NgbModal) { }

 ngOnInit(): void {
}

abrirModal() {
  const modalRef = this.modalService.open(ModalComponent);
}

cerrarModal() {
  if (this.modalRef) {
    this.modalRef.close(); // Cierra el modal
  }
}
}