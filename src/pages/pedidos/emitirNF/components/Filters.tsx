import { Button, Input, Select } from "../../../../components"
import { useFilters } from "../hooks/useFilters"

const Filters = () => {

  const {
    formik: {
      values,
      handleChange
    }
  } = useFilters()

  return (
    <div className="pb-5 mb-5 border-b">
      <form className="grid grid-cols-6 gap-5 mb-5">
        <Select
          full
          name="tipo_nf"
          label="Tipo NF:"
          onChange={handleChange}
          value={values.tipo_nf}
        />

        <Input onChange={handleChange} name="numero" value={values.numero} label="Número:" full />

        <Input onChange={handleChange} name="pedido" value={values.pedido} label="Pedido:" full />
        <Select onChange={handleChange} name="faturamento" value={values.faturamento} label="Faturamento:" full />
        <Select onChange={handleChange} name="estado" value={values.estado} label="Estado:" full />
        <Input onChange={handleChange} name="nome_cpf_cnpj" value={values.nome_cpf_cnpj} label="Nome/CPF/CNPJ:" full />
        <Input onChange={handleChange} name="transmissao_inicio" value={values.transmissao_inicio} type="date" label="Transmissão início:" full />
        <Input onChange={handleChange} name="transmissao_fim" value={values.transmissao_fim} type="date" label="Transmissão fim:" full />
        <Select onChange={handleChange} name="status" value={values.status} label="Status:" full />
        <Select onChange={handleChange} name="porta_copo" value={values.porta_copo} label="Porta Copo:" full />
        <Input onChange={handleChange} name="producao" value={values.producao} label="Produção" full />
        <Select onChange={handleChange} name="vendedor" value={values.vendedor} label="Vendedor:" full />
        <Select onChange={handleChange} name="tipo_pedido" value={values.tipo_pedido} label="Tipo Pedido:" full />
        <Select onChange={handleChange} name="forma_pagamento" value={values.forma_pagamento} label="Forma Pagamento:" full />
        <Input onChange={handleChange} name="periodo_inicio" value={values.periodo_inicio} type="date" label="Período início:" full />
        <Input onChange={handleChange} name="periodo_fim" value={values.periodo_fim} type="date" label="Período fim:" full />
        <Select onChange={handleChange} name="transportadora" value={values.transportadora} label="Transportadora:" full />
        <Input onChange={handleChange} name="voucher" value={values.voucher} label="Voucher" full />
      </form>

      <div className="flex justify-end">
        <Button>Filtrar</Button>
      </div>
    </div>
  )
}

export { Filters }