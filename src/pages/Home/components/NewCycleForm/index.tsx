import { useFormContext } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 01" />
        <option value="Projeto 02" />
        <option value="Projeto 03" />
        <option value="Projeto 04" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={0}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
