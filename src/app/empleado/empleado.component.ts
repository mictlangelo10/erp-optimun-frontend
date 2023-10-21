import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';



@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  fechaInicio: string = '';
  fechaFin: string = '';
  public selectedOption: string = '0';

   // Variable para el estado del checkbox
   public isChecked: boolean = false;

  // Modal reference
  private modalRef?: NgbModalRef;

   constructor(public modalService: NgbModal) { }
 
   ngOnInit(): void {
  }

  // Función para manejar cambios en el checkbox
  toggleForm(): void {
    // Cambia el estado del checkbox
    this.isChecked = !this.isChecked;
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
