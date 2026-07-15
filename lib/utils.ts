/**
 * Utilitário de composição de classNames — sem dependências novas.
 * Filtra valores falsy, junta com espaço. Disponível para uso futuro em
 * componentes com lógica condicional de classe mais complexa do que os
 * template strings atuais precisam.
 *
 * Uso: cn("base-class", condicao && "classe-condicional", outraVar)
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
