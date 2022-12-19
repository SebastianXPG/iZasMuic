import mongoose from "mongoose";

const opcTipoDoc =["RC","TI","CC","NIT","CE"]
const opcSnActivo=[1,0]
const opcPago=["EFECTIVO","T.DEBITO","T.CREDITO","TRANSFERENCIA"]

const ventModel = mongoose.Schema({
  tipo_doc: { type: String, required: true, enum: opcTipoDoc },
  documento: { type: String, required: true, minlength: 4, maxlength: 30 },
  cod_producto: { type: String, required: true, minlength: 2, maxlength: 16 },
  nom_producto: { type: String, required: true, minlength: 2, maxlength: 30 },
  cantidad: { type: Number, required: true, min: 0, max: 10000 },
  valor_unidad: { type: Number, required: true, min: 0, max: 1000000000 },
  valor_total: { type: String, required: true, min: 0, max: 10000000000 },
  nro_factura: { type: Number, required: true, min: 1, max: 100000 },
  fecha_factura: { type: Date, required: true },
  forma_pago: { type: String, required: true, enum: opcPago },
//copio 2 y fusiono
  sn_despacho: { type: Boolean, required: true, default: 0 },
  dir_entrega: { type: String, required: true, minlength: 8, maxlength: 60 }
});

export default mongoose.model("ventas", ventModel)
